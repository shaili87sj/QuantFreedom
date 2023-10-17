class DataLoader {
  load(callback) {
    callback({
      // indexBased: true,
      panes: [
        {
          overlays: [
            {
              name: "BTC Tether US Binance",
              type: "Candles",
              data: [
                [1697241180000, 26830.0, 26833.7, 26827.5, 26827.6],
                [1697241240000, 26827.6, 26830.9, 26824.6, 26830.9],
                [1697241300000, 26830.9, 26840.1, 26830.9, 26839.7],
                [1697241360000, 26839.7, 26840.7, 26834.2, 26834.2],
                [1697241420000, 26834.2, 26848.6, 26834.2, 26848.0],
                [1697241480000, 26848.0, 26849.7, 26844.9, 26844.9],
                [1697241540000, 26844.9, 26849.8, 26844.9, 26849.7],
              ],
            },
          ],
        },
      ],
    });
  }
}

export { DataLoader };