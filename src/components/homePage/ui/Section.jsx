import buttonSection from '../../../constant/buttonSection';
import Button from '../elements/Button';

export default function SectionLeft({ className }) {
  return (
    <div
      className={`${className} h-full w-full col-span-3 row-span-full flex flex-col rounded-l-xl border-r border-white/20`}
    >
      <div className="h-1/6 w-full  flex justify-center items-center">
        <img src="/logo.png" alt="logo riot game" className="w-18 h-14" />
      </div>
      <div className="w-full h-5/6 flex flex-col justify-between overflow-hidden">
        {buttonSection.map(({ text, img }, index) => (
          <Button
            key={index}
            text={text}
            img={img}
            className="border-b last:border-none last:rounded-bl-xl"
          />
        ))}
      </div>
    </div>
  );
}
