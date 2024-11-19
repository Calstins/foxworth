import { twMerge } from 'tailwind-merge';

export const Title = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={twMerge(
        'font-extrabold font-heading uppercase text-3xl',
        className
      )}
    >
      {title}
    </h2>
  );
};
