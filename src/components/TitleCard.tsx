import { Title } from './Title';

export const TitleCard = ({ name, text }: { text: string; name: string }) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <Title title={name} className="font-heading" />
      <p className="text-base text-center max-w-3xl">{text}</p>
    </div>
  );
};
