import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { formData } = await req.json()
    
    const hubspotApiKey = Deno.env.get('HUBSPOT_API_KEY')
    if (!hubspotApiKey) {
      throw new Error('HubSpot API key not configured')
    }

    // Create contact in HubSpot
    const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          email: formData.parentEmail,
          firstname: formData.parentName.split(' ')[0],
          lastname: formData.parentName.split(' ').slice(1).join(' ') || '',
          phone: formData.parentPhone,
          lifecore_child_name: formData.childName,
          lifecore_child_age: formData.childAge,
          lifecore_child_grade: formData.childGrade,
          lifecore_previous_school: formData.previousSchool,
          lifecore_interests: formData.interests,
          lifecore_challenges: formData.challenges,
          lifecore_why: formData.whyLifeCore,
          lifecore_application_date: new Date().toISOString(),
        }
      })
    })

    if (!hubspotResponse.ok) {
      const errorText = await hubspotResponse.text()
      console.error('HubSpot error:', errorText)
      throw new Error(`HubSpot API error: ${hubspotResponse.status}`)
    }

    const result = await hubspotResponse.json()
    console.log('HubSpot contact created:', result.id)

    return new Response(
      JSON.stringify({ success: true, contactId: result.id }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error submitting to HubSpot:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to submit application',
        success: false 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})