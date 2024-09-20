import { generateClasses, parseClasses } from "@/scripts/tools/utils";
import Image from "next/image";

interface Props extends InputHTML {
  className?: string
  variant?: ('search')[]
  label?: string
}


export default function Input({ className = '', variant = [], label = '', ...props }: Props) {
  const classes = generateClasses(className, variant, 'input');
  
  return (
    <label className="input-label">
      { label }
      { variant.includes('search') && <Image src="/images/icons/search.svg" alt="Search icon" width={24} height={24} /> }
      <input
        {...parseClasses(classes)}
        {...props}
      />
    </label>
  )
}
