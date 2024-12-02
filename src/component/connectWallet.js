import TonWeb from "tonweb";

// Налаштування для TON
const tonweb = new TonWeb();

// Створення підключення до гаманця
const connectWallet = async () => {
  try {
    const wallet = await tonweb.wallet.create();
    const address = wallet.address.toString();
    console.log("TON Wallet Address:", address);
    return address;
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
};

// connectWallet();
export default connectWallet;