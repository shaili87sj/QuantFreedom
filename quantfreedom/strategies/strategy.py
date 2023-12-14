from typing import Callable, NamedTuple
import numpy as np


class IndicatorSettingsArrays(NamedTuple):
    pass


class Strategy:
    entries: np.array
    entry_message: Callable
    exit_prices: np.array
    indicator_settings_arrays: IndicatorSettingsArrays
    log_indicator_settings: Callable
    set_entries_exits_array: Callable

    def __init__(
        self,
        long_short: str,
    ) -> None:
        self.long_short = long_short

    def plot_signals(
        self,
        candles: np.array,
    ):
        pass
