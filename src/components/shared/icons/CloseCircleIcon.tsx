import { IconProps } from "@/types/iconProps";

export default function CircleCloseIcon({ className }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="circle close icon"
      className={className}
    >
      <path
        d="M16.0001 2.66667C8.65341 2.66667 2.66675 8.65333 2.66675 16C2.66675 23.3467 8.65341 29.3333 16.0001 29.3333C23.3467 29.3333 29.3334 23.3467 29.3334 16C29.3334 8.65333 23.3467 2.66667 16.0001 2.66667ZM20.4801 19.0667C20.8667 19.4533 20.8667 20.0933 20.4801 20.48C20.2801 20.68 20.0267 20.7733 19.7734 20.7733C19.5201 20.7733 19.2667 20.68 19.0667 20.48L16.0001 17.4133L12.9334 20.48C12.7334 20.68 12.4801 20.7733 12.2267 20.7733C11.9734 20.7733 11.7201 20.68 11.5201 20.48C11.1334 20.0933 11.1334 19.4533 11.5201 19.0667L14.5867 16L11.5201 12.9333C11.1334 12.5467 11.1334 11.9067 11.5201 11.52C11.9067 11.1333 12.5467 11.1333 12.9334 11.52L16.0001 14.5867L19.0667 11.52C19.4534 11.1333 20.0934 11.1333 20.4801 11.52C20.8667 11.9067 20.8667 12.5467 20.4801 12.9333L17.4134 16L20.4801 19.0667Z"
        fill="#FEF4FF"
      />
    </svg>
  );
}
