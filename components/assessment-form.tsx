"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

interface AssessmentFormProps {
  onClose: () => void
}

export default function AssessmentForm({ onClose }: AssessmentFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    homeType: "",
    topConcern: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="space-y-4 py-6 text-center">
        <CheckCircle2 className="w-12 h-12 text-[#0F4D3F] mx-auto" />
        <h3 className="text-lg font-semibold text-[#101315]">Assessment Submitted</h3>
        <p className="text-sm text-[#3B4147]">
          Thanks for taking the first step. We'll be in touch shortly with next steps and pricing information.
        </p>
        <a href="#" className="inline-block mt-4 text-[#9D8356] font-medium hover:text-[#876F48] text-sm">
          View our calendar (placeholder)
        </a>
        <Button onClick={onClose} variant="outline" className="mt-4 w-full bg-transparent">
          Close
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-[#101315]">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="border-[#DAD3C5]"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-[#101315]">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="border-[#DAD3C5]"
        />
      </div>

      <div>
        <Label htmlFor="city" className="text-[#101315]">
          City
        </Label>
        <Input
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Toronto"
          required
          className="border-[#DAD3C5]"
        />
      </div>

      <div>
        <Label className="text-[#101315]">Home Type</Label>
        <Select value={formData.homeType} onValueChange={(v) => handleSelectChange(v, "homeType")}>
          <SelectTrigger className="border-[#DAD3C5]">
            <SelectValue placeholder="Select home type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="rental">Rental</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-[#101315]">Top Concern</Label>
        <Select value={formData.topConcern} onValueChange={(v) => handleSelectChange(v, "topConcern")}>
          <SelectTrigger className="border-[#DAD3C5]">
            <SelectValue placeholder="Select main concern" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="doors">Doors & Entry Points</SelectItem>
            <SelectItem value="windows">Windows & Glass</SelectItem>
            <SelectItem value="lighting">Lighting & Visibility</SelectItem>
            <SelectItem value="cameras">Cameras & Monitoring</SelectItem>
            <SelectItem value="familyplan">Family Response Plan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-[#9D8356] text-white hover:bg-[#876F48]">
        Submit Assessment
      </Button>
    </form>
  )
}
