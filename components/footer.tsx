export const Footer = () => {
  return (
    <footer className="w-full py-6 md:px-8 md:py-0">
      <div className="container flex flex-row items-center justify-between gap-4 text-balance text-center text-sm leading-loose text-muted-foreground md:h-24">
        <p>Jakub Śliz</p>
        <p className="flex flex-row">
          Frontend Developer
          <span className="hidden md:block ml-2">Tarnów / Kraków</span>
        </p>
      </div>
    </footer>
  );
};
