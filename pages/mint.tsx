import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css"

const Mint = () => {
  const router = useRouter();
	  // Get the currently connected wallet's address
	const address = useAddress();

	// Function to connect to the user's Metamask wallet
	const connectWithMetamask = useMetamask();

	// Get the NFT Collection contract
	const nftDropContract = useNFTDrop(
		"0x75Eb99948cAaC5845D59F54461200eE1C773946C"
	);
	async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.container}>
			<div className="imageDRap">
									<img className="dropImg" src={`NFTDROP.png`} alt="drop" />
								</div>
			{!address ? (
        <button className={`${styles.mainButton} ${styles.spacerBottom}`}
					onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      ) : (
				
          <button
					className="btn"
					onClick={() => claimNft()}>
            Claim An NFT
          </button>
      )}
    </div>
  );
};

export default Mint;
