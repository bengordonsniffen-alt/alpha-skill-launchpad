import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const LifeCoreApplication = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    currentGrade: "",
    previousSchool: "",
    interests: "",
    challenges: "",
    whyLifeCore: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-to-hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest in LifeCore. We'll be in touch within 24 hours.",
        });
        setFormData({
          parentName: "",
          email: "",
          phone: "",
          childName: "",
          childAge: "",
          currentGrade: "",
          previousSchool: "",
          interests: "",
          challenges: "",
          whyLifeCore: ""
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="application" className="py-20 bg-gradient-to-b from-lifecore-navy/5 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lifecore-navy mb-4">
            Ready to Transform Your Child's Education?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Submit your application below and join families who've discovered what education 
            looks like when life skills take center stage.
          </p>
        </div>

        <Card className="shadow-elegant border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-lifecore-navy">
              Alpha School Interest Form
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-lifecore-navy font-medium">
                    Parent/Guardian Name *
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => handleChange("parentName", e.target.value)}
                    className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lifecore-navy font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lifecore-navy font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy"
                />
              </div>

              {/* Child Information */}
              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-semibold text-lifecore-navy mb-4">
                  Child Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="childName" className="text-lifecore-navy font-medium">
                      Child's Name *
                    </Label>
                    <Input
                      id="childName"
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => handleChange("childName", e.target.value)}
                      className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="childAge" className="text-lifecore-navy font-medium">
                      Age *
                    </Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="3"
                      max="18"
                      required
                      value={formData.childAge}
                      onChange={(e) => handleChange("childAge", e.target.value)}
                      className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentGrade" className="text-lifecore-navy font-medium">
                      Current Grade Level *
                    </Label>
                    <Select 
                      value={formData.currentGrade} 
                      onValueChange={(value) => handleChange("currentGrade", value)}
                      required
                    >
                      <SelectTrigger className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prek">PreK</SelectItem>
                        <SelectItem value="k">Kindergarten</SelectItem>
                        <SelectItem value="1">1st Grade</SelectItem>
                        <SelectItem value="2">2nd Grade</SelectItem>
                        <SelectItem value="3">3rd Grade</SelectItem>
                        <SelectItem value="4">4th Grade</SelectItem>
                        <SelectItem value="5">5th Grade</SelectItem>
                        <SelectItem value="6">6th Grade</SelectItem>
                        <SelectItem value="7">7th Grade</SelectItem>
                        <SelectItem value="8">8th Grade</SelectItem>
                        <SelectItem value="9">9th Grade</SelectItem>
                        <SelectItem value="10">10th Grade</SelectItem>
                        <SelectItem value="11">11th Grade</SelectItem>
                        <SelectItem value="12">12th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousSchool" className="text-lifecore-navy font-medium">
                  Previous School/Educational Experience
                </Label>
                <Input
                  id="previousSchool"
                  type="text"
                  value={formData.previousSchool}
                  onChange={(e) => handleChange("previousSchool", e.target.value)}
                  className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy"
                  placeholder="Current school or homeschool experience"
                />
              </div>

              {/* Additional Information */}
              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-semibold text-lifecore-navy mb-4">
                  Tell Us More
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="interests" className="text-lifecore-navy font-medium">
                      What are your child's main interests and strengths?
                    </Label>
                    <Textarea
                      id="interests"
                      value={formData.interests}
                      onChange={(e) => handleChange("interests", e.target.value)}
                      className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy min-h-[100px]"
                      placeholder="Tell us about what your child loves to do..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="challenges" className="text-lifecore-navy font-medium">
                      What challenges is your child facing in their current educational setting?
                    </Label>
                    <Textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e) => handleChange("challenges", e.target.value)}
                      className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy min-h-[100px]"
                      placeholder="Help us understand what's not working..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="whyLifeCore" className="text-lifecore-navy font-medium">
                      Why are you interested in Alpha's approach to education? *
                    </Label>
                    <Textarea
                      id="whyLifeCore"
                      required
                      value={formData.whyLifeCore}
                      onChange={(e) => handleChange("whyLifeCore", e.target.value)}
                      className="border-gray-300 focus:border-lifecore-navy focus:ring-lifecore-navy min-h-[120px]"
                      placeholder="What draws you to our life skills-focused approach?"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-lg py-4"
                >
                  Submit Application
                </Button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  We'll review your application and contact you within 24 hours to schedule a conversation.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LifeCoreApplication;