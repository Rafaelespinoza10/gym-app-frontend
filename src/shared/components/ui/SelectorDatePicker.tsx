import type React from "react";
import { useState } from "react";
import { Stack } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


interface SelectorDateProps {
    label?: string;
    onChange: (range: { startDate: Dayjs | null; endDate: Dayjs | null }) => void;
}


export const SelectorDatePicker: React.FC<SelectorDateProps> = ({
    label = "Select a date Range",
    onChange,
}) => {

    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    const handleStartChange = (newValue: Dayjs | null) => {
        setStartDate(newValue);
        onChange({startDate: newValue, endDate});
    }

    const handleEndChange = (newValue: Dayjs | null) => {
        setEndDate(newValue);
        onChange({startDate, endDate: newValue});
    }

  return (
    <div className="full">
        {label && <label className="block mb-1 text-sm  font-medium text-gray-800 tracking-tighter">{label}</label>}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} direction="row">
        <DatePicker
          label="Start date"
          value={startDate}
          onChange={handleStartChange}
        />
        <DatePicker
          label="End date"
          value={endDate}
          onChange={handleEndChange}
        />
      </Stack>
    </LocalizationProvider>
    </div>
  )
}
