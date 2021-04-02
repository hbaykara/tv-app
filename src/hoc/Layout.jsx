import Header from "../components/Header/Header";

const Layout = ({ children, search, setSearch }) => {
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
