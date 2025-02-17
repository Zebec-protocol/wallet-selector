import type { AccountImportData } from "@near-wallet-selector/core";

import { encryptAccountData, decryptAccountData } from "./importAccount";

describe("import account utils", () => {
  const accountData: Array<AccountImportData> = [
    {
      accountId: "test.near",
      privateKey: "test123",
    },
    {
      accountId: "test2.near",
      privateKey: "test456",
    },
  ];
  it("encryption and decryption accountData", () => {
    const secretKey = "mE@~H?QyyC8fpy,PC7sv#//w5W4SFfYO";

    const ciphertext = encryptAccountData({ accountData, secretKey });
    const decryptedAccountData = decryptAccountData({ ciphertext, secretKey });

    expect(accountData).toEqual(decryptedAccountData);
  });

  it("Fail to encryptAccountData if secretKey is missing", () => {
    const secretKey = "";
    expect(() => encryptAccountData({ accountData, secretKey })).toThrow(
      "Secret key is required"
    );
  });

  it("Fail to decryptAccountData if secretKey is missing", () => {
    const secretKey = "mE@~H?QyyC8fpy,PC7sv#//w5W4SFfYO";
    const invalidSecretKey = "";
    const ciphertext = encryptAccountData({ accountData, secretKey });
    expect(() =>
      decryptAccountData({
        ciphertext,
        secretKey: invalidSecretKey,
      })
    ).toThrow("Secret key is required");
  });

  it("Fail to decryptAccountData if cipher text is missing", () => {
    const secretKey = "mE@~H?QyyC8fpy,PC7sv#//w5W4SFfYO";
    const ciphertext = "";
    expect(() =>
      decryptAccountData({
        ciphertext,
        secretKey,
      })
    ).toThrow("Unable to decrypt account data");
  });
});
