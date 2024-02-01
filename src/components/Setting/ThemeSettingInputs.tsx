interface ThemeSettingData {
    darkModeWhenRunning: boolean;
}

interface ThemeSettingInputsProps {
    themeSetting: ThemeSettingData;
    setThemeSetting: (value: ThemeSettingData) => void;
}

const ThemeSettingInputs = ({
    themeSetting,
    setThemeSetting,
}: ThemeSettingInputsProps) => {
    const handleChange = () => {
        setThemeSetting({
            ...themeSetting,
            darkModeWhenRunning: !themeSetting.darkModeWhenRunning,
        });
    };

    return (
        <div className="theme-setting">
            <h3 className="setting-title py-4 font-semibold capitalize text-gray-400">
                🎨 Theme
            </h3>
            <label className="inline-flex w-full cursor-pointer items-center justify-between">
                <span className="timer-setting__title font-bold">
                    Dark Mode When Running
                </span>
                <input
                    type="checkbox"
                    checked={themeSetting.darkModeWhenRunning}
                    onChange={handleChange}
                    className="peer sr-only"
                    id="dark-mode-input"
                    name="darkModeWhenRunning"
                />
                <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            </label>
        </div>
    );
};

export { ThemeSettingInputs };
