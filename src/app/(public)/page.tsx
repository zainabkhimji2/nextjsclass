import Button from "../components/button";
let firstName = "Zainab Khimji";

function Homepage() {
  return (
    <div>
      {/* <h1>hello {firstName}</h1>
<Link href ="/about"> ABOUT </Link>
<Link href = "/contact">Contact</Link> */}

      {/* class 2 */}

      <h1>hello {firstName}</h1>
      <Button text="download for windows" />
      <Button text="open in your browser" />
    </div>
  );
}

export default Homepage;
