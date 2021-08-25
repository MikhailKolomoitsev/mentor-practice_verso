// import style from './hero.module';
import dc from "../../images/DC.svg";
import gate from "../../images/gate.svg";
import pangolin from "../../images/pangolin.svg";
import roblacts from "../../images/roblacts.svg";
import Container from "../Container/Container";

export const Hero = function () {
  return (
    <section>
      <Container>
        <h1>How to bay VSO</h1>
        <p>
          Verso(VSO) is currently available on <a href="/">Gate.io</a> as well
          as on several decentralized exchanges(DEX) connected to the Avalanche
          blockchain.
        </p>

        <ul>
          <li>
            <h2>CEX Listings</h2>
            <img src={gate} alt="gate" />
          </li>
          <li>
            <h2>DEX Listings</h2>
            <img src={pangolin} alt="pangolin" />
            <img src={roblacts} alt="roblacts" />
            <img src={dc} alt="dc" />
          </li>
        </ul>

        <p>
          If you’re new to Avalache, we suggest you also to check out our
          <a href="/">Reference Guide</a>
        </p>
      </Container>
    </section>
  );
};
