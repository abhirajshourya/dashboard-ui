function Footer() {
  return (
    <div className="w-full p-10 bg-zinc-300">
      <div>
        <h1 className="text-xl text-center text-zinc-900">Footer Title</h1>
        <p className="text-center text-zinc-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, metus sit amet
          accumsan tincidunt, orci ex lacinia nunc, nec ultricies turpis nunc vel eros. Nulla
          facilisi. Cras nec semper libero. Donec in nunc nec nunc tincidunt lacinia. Integer ac
          sollicitudin mi. Nulla facilisi. Nullam vehicula, metus sit amet accumsan tincidunt, orci
          ex lacinia nunc, nec ultricies turpis nunc vel eros. Nulla facilisi. Cras nec semper
          libero. Donec in nunc nec nunc tincidunt lacinia. Integer ac sollicitudin mi.
        </p>
      </div>
      <p className="text-sm text-center text-zinc-900">
        App Name &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
