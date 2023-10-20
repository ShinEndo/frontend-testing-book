import { timeout, wait } from ".";

describe("非同期処理", () => {
  describe("wait", () => {
    // Promiseをreturnする書き方
    test("指定時間待つと、経過時間をもって resolve される", () => {
      return wait(50).then((duration) => expect(duration).toBe(50));
    });
    test("指定時間待つと、経過時間をもって resolve される", () => {
      return expect(wait(50)).resolves.toBe(50);
    });

    // async/awaitを使った書き方
    test("指定時間待つと、経過時間をもって resolve される", async () => {
      await expect(wait(50)).resolves.toBe(50);
    });
    test("指定時間待つと、経過時間をもって resolve される", async () => {
      expect(await wait(50)).toBe(50);
    });
  });

  describe("timeout", () => {
    // Promiseをreturnする書き方
    test("指定時間待つと、経過時間をもって、 reject される", () => {
      return timeout(50).catch((duration) => expect(duration).toBe(50));
    });
    test("指定時間待つと、経過時間をもって、 reject される", () => {
      return expect(timeout(50)).rejects.toBe(50);
    });

    // async/awaitを使った書き方
    test("指定時間待つと、経過時間をもって、 reject される", async () => {
      await expect(timeout(50)).rejects.toBe(50);
    });

    // try...catchを使った書き方
    test("指定時間待つと、経過時間をもって、 reject される", async () => {
      expect.assertions(1);
      try {
        await timeout(50);
      } catch (err) {
        expect(err).toBe(50);
      }
    });
  });
});
