import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ActivityType = ({ value, onChange }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an activity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Activities</SelectLabel>
          <SelectItem value="RUNNING">Running</SelectItem>
          <SelectItem value="CYCLING">Cycling</SelectItem>
          <SelectItem value="SWIMMING">Swimming</SelectItem>
          <SelectItem value="WALKING">Walking</SelectItem>
          <SelectItem value="CARDIO">Cardio</SelectItem>
          <SelectItem value="YOGA">Yoga</SelectItem>
          <SelectItem value="WEIGHT_LIFTING">Weight Lifting</SelectItem>
          <SelectItem value="HIIT">HIIT</SelectItem>
          <SelectItem value="AEROBICS">Aerobics</SelectItem>
          <SelectItem value="DANCE">Dance</SelectItem>
          <SelectItem value="OTHER">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
