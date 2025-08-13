"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import ScheduleVisitPopup from "@/components/schedule-visit-popup"

interface ScheduleVisitCTAProps {
  callButtonClassName?: string
  scheduleButtonClassName?: string
}

export default function ScheduleVisitCTA({
  callButtonClassName,
  scheduleButtonClassName,
}: ScheduleVisitCTAProps) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className={callButtonClassName ?? "bg-white text-blue-900 hover:bg-gray-100"}
        >
          <a href="tel:9811750130">
            <Phone className="h-5 w-5 mr-2" />
            Call 9811750130
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className={scheduleButtonClassName ?? "border-white text-white hover:bg-white hover:text-blue-900"}
          onClick={() => setShowPopup(true)}
        >
          Schedule Site Visit
        </Button>
      </div>

      {showPopup && (
        <ScheduleVisitPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  )
}
