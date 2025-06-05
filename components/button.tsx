'use client';

type buttonProps={
    label: string;
    onClick?: () => void;
    className?: string
}


const Button: React.FC<buttonProps> = ({
    label, onClick, className
}) => {
    return (
        <button
        onClick={onClick}
        className={`px-4 py-2 w-full rounded bg-blue-600 text-white font-medium ${className}`}
        >
         {label}
        </button>
    )
}
export default Button;
