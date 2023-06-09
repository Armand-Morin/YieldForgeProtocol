import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";


export default function InstructionsComponent() {

	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					<span>YieldForge Protocol</span>
				</h1>
				<p>
					Start exploring our strategies{" "}
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a href={"/staking"}>
					<div className={styles.button}>
						<p>Staking</p>
					</div>
				</a>
				<a  href={"/liquidity-management"}>
					<div className={styles.button}>
						<p>Liquidity Management</p>
					</div>
				</a>
				<a href={"/quant_strategies"}>
					<div className={styles.button}>
						<p>Quantitative Strategies</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<div>
						<a
							href="https://github.com/Armand-Morin/YieldForge"
							target={"_blank"}
						>
							Hosted By Franklin Templeton
						</a>
					</div>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/Armand-Morin/YieldForge"
							target={"_blank"}
						>
							Leave a star on Github
						</a>
					</div>
					<div>
						<a
							href="https://github.com/Armand-Morin/YieldForge"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
