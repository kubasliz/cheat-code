import Image from 'next/image';

export const Logo = () => {
  return (
    <>
      <Image src="/icon.svg" alt="Logo" width={32} height={32} />
      <h1 className="font-semibold ml-2">CheatCode</h1>
    </>
  );
};
