import Input from "./library/Input";

export default function Header() {
  return (
    <header>
      <Input
        variant={['search']}
        placeholder="username"
      />
    </header>
  );
}
