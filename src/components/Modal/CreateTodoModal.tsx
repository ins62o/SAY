/* React */
import React, { useEffect, useState } from "react";

/* Library */
import { Dayjs } from "dayjs";

/* Components */
import BaseModal from "./BaseModal";

/* Styles */
import FormStep from "../steps/FormStep";
import CalendarStep from "../steps/CalendarStep";
import CharacterStep from "../steps/CharacterStep";

type Props = {
  visible: boolean;
  initialDate: Dayjs;
  onClose: () => void;
};

type Step = "form" | "calendar" | "character";

export default function CreateTodoModal({
  visible,
  initialDate,
  onClose,
}: Props) {
  const [step, setStep] = useState<Step>("form");
  const [content, setContent] = useState("");
  const [date, setDate] = useState<Dayjs>(initialDate);

  useEffect(() => {
    if (visible) {
      setStep("form");
      setDate(initialDate);
    }
  }, [visible, initialDate]);

  return (
    <BaseModal visible={visible} onClose={onClose} width={360} height={500}>
      {/* 할일 작성 폼 */}
      {step === "form" && (
        <FormStep
          content={content}
          setContent={setContent}
          date={date}
          onOpenCalendar={() => setStep("calendar")}
          onOpenCharacter={() => setStep("character")}
          onClose={onClose}
        />
      )}

      {/* 캘린더 날짜 선택  */}
      {step === "calendar" && (
        <CalendarStep
          selectedDate={date}
          onBack={() => setStep("form")}
          onSelectDate={(d) => {
            setDate(d);
            setStep("form");
          }}
        />
      )}

      {/* 참여 인원 선택 */}
      {step === "character" && <CharacterStep onBack={() => setStep("form")} />}
    </BaseModal>
  );
}
