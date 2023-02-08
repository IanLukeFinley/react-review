
export default  function Header({loggedIn, handleLoggedInClick}) {
  return (
    <button onClick={handleLoggedInClick}>{loggedIn ? "Log Out" : "Log In"}</button>
  );
}