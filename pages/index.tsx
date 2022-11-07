import { useRouter } from "next/router";
import image from "img.png"

const Home = () => {
  const router = useRouter();

  return (
    <div>
			<link href="https://fonts.googleapis.com/css2?family=Urbanist&display=swap" rel="stylesheet"></link>
			<div className="mainPage">
					<div className="container">
						<div className="main_mainPage">
							<div className="content">
								
								<h1 className="h1">Thirdweb Deploy - Custom <span>Staking Contract</span></h1>
								<div className="imageDROP">
									<img className="dropImg" src={`NFTDROP.png`} alt="drop" />
								</div>
								<div className="buttons">
									<div className="mintBtn">
										
											<h2>Mint a new NFT</h2>
											<p className="parText">
												Use the NFT Drop Contract to <br></br> claim an NFT from the collection.
											</p>
											<button className="btn">
													<div onClick={() => router.push(`/mint`)}>
														Mint a new NFT
													</div>
											</button>
										
									</div>
									<div className="stakeBtn">
										
											
											<h2>Stake Your NFTs</h2>
											<p className="parText">
												Use the custom staking contract deployed via <b>thirdweb Deploy</b>{" "}
												
											</p>
											<button className="btn">
												<div onClick={() => router.push(`/stake`)}>
														Stake Your NFTs
													</div>
											</button>
										
									</div>
								</div>
							</div>
							<div className="imagePrikol">
								<img className = "rightImage" src="img.png" alt="" />
							</div>
						</div>
					</div>
				</div>
    </div>
  );
};

export default Home;
