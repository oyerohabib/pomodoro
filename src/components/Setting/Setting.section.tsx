import { FormEvent, useRef } from 'react';
import { useAtom } from 'jotai';
import {
    longBreakIntervalAtom,
    timerSettingsAtom,
    themeSettingsAtom,
} from '../../lib';

import { TimerSettingInputs } from './TimerSettingInputs';
import { ThemeSettingInputs } from './ThemeSettingInputs';

import { Button } from '../ui';

interface SettingFormTimerData {
    pomodoroDuration: number;
    shortBreakDuration: number;
    longBreakDuration: number;
    longBreakInterval: number;
}

const Setting = () => {
    const [timerSetting, setTimerSetting] = useAtom(timerSettingsAtom);
    const [longBreakInterval, setLongBreakInterval] = useAtom(
        longBreakIntervalAtom
    );
    const [themeSetting, setThemeSetting] = useAtom(themeSettingsAtom);

    const dialog = useRef<HTMLDialogElement | null>(null);

    function showModal() {
        (dialog.current as HTMLDialogElement).showModal();
    }

    function hideModal() {
        (dialog.current as HTMLDialogElement).close();
    }

    function handleSubmit(e: FormEvent) {
        const $form = e.currentTarget as HTMLFormElement;
        const formData = Object.fromEntries(new FormData($form));

        const settingFormData: SettingFormTimerData = {
            longBreakDuration: +formData.longBreakDuration,
            pomodoroDuration: +formData.pomodoroDuration,
            shortBreakDuration: +formData.shortBreakDuration,
            longBreakInterval: +formData.longBreakInterval,
        };

        const isWrongInputValue =
            settingFormData.pomodoroDuration <= 0 ||
            settingFormData.longBreakInterval <= 0;

        if (isWrongInputValue) {
            return;
        }

        setTimerSetting({
            pomodoroDuration: settingFormData.pomodoroDuration,
            shortBreakDuration: settingFormData.shortBreakDuration,
            longBreakDuration: settingFormData.longBreakDuration,
        });
        setLongBreakInterval(settingFormData.longBreakInterval);
    }

    return (
        <>
            <Button
                id="setting-button"
                intent="secondary"
                size="small"
                type="button"
                aria-label="setting button"
                onClick={showModal}
                className="visible flex items-center"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.91 0.9C10.9348 0.653508 11.0502 0.424986 11.2338 0.258711C11.4175 0.0924357 11.6563 0.000244633 11.904 0H16.096C16.3438 0.000244633 16.5826 0.0924357 16.7662 0.258711C16.9499 0.424986 17.0653 0.653508 17.09 0.9L17.462 4.616C18.5288 5.01035 19.5203 5.58393 20.394 6.312L23.8 4.774C24.0262 4.67185 24.2823 4.65745 24.5185 4.7336C24.7547 4.80974 24.9541 4.97099 25.078 5.186L27.172 8.814C27.2963 9.0285 27.3364 9.2815 27.2847 9.52392C27.2329 9.76634 27.093 9.98091 26.892 10.126L23.858 12.306C24.0497 13.4272 24.0497 14.5728 23.858 15.694L26.89 17.874C27.0913 18.0188 27.2317 18.2332 27.2838 18.4757C27.3359 18.7181 27.2961 18.9713 27.172 19.186L25.078 22.814C24.9541 23.029 24.7547 23.1903 24.5185 23.2664C24.2823 23.3425 24.0262 23.3281 23.8 23.226L20.394 21.69C19.528 22.41 18.538 22.988 17.462 23.384L17.09 27.1C17.0653 27.3465 16.9499 27.575 16.7662 27.7413C16.5826 27.9076 16.3438 27.9998 16.096 28H11.904C11.6563 27.9998 11.4175 27.9076 11.2338 27.7413C11.0502 27.575 10.9348 27.3465 10.91 27.1L10.538 23.384C9.47125 22.9898 8.47966 22.4162 7.60603 21.688L4.20003 23.226C3.97386 23.3281 3.71779 23.3425 3.4816 23.2664C3.2454 23.1903 3.04596 23.029 2.92203 22.814L0.828033 19.186C0.703793 18.9715 0.663649 18.7185 0.715385 18.4761C0.767122 18.2337 0.907051 18.0191 1.10803 17.874L4.14203 15.694C3.95061 14.5728 3.95061 13.4272 4.14203 12.306L1.11003 10.126C0.90872 9.9812 0.768389 9.76677 0.716279 9.52433C0.664169 9.28188 0.703997 9.02873 0.828033 8.814L2.92003 5.186C3.04396 4.97099 3.2434 4.80974 3.4796 4.7336C3.71579 4.65745 3.97186 4.67185 4.19803 4.774L7.60403 6.312C8.47003 5.592 9.46003 5.012 10.536 4.616L10.91 0.9ZM10.556 16.034L10.512 15.96C9.9824 15.0408 9.83962 13.9488 10.1151 12.9243C10.3906 11.8997 11.0618 11.0266 11.981 10.497C12.9003 9.96736 13.9923 9.82458 15.0168 10.1001C16.0413 10.3756 16.9144 11.0468 17.444 11.966L17.488 12.04C18.0177 12.9592 18.1604 14.0512 17.885 15.0757C17.6095 16.1003 16.9383 16.9734 16.019 17.503C15.0998 18.0326 14.0078 18.1754 12.9833 17.8999C11.9588 17.6244 11.0857 16.9532 10.556 16.034Z"
                        fill="currentColor"
                    />
                </svg>
                <span>Settings</span>
            </Button>

            {/* link about dialog html component: https://blog.webdevsimplified.com/2023-04/html-dialog/ */}
            <dialog ref={dialog} className="dialog | box | visible">
                <form method="dialog" onSubmit={handleSubmit}>
                    <header className="dialog__header | box | flex items-center">
                        <h2 className="text-lg font-bold">Setting</h2>
                        <Button
                            intent="naked"
                            size="small"
                            type="reset"
                            className="to-right hover:text-black/100"
                            aria-label="close button"
                            onClick={hideModal}
                        >
                            Cancel/Close
                        </Button>
                    </header>

                    <div className="dialog__content | box">
                        {/* besides the timer setting, other setting should be updated in real time, such as background color and sound (decorative) */}
                        <TimerSettingInputs
                            timerSetting={{
                                ...timerSetting,
                                longBreakInterval,
                            }}
                        />

                        {/* Theme Settings: Where Color Themes, Hour Format, and Dark Mode would live */}
                        <ThemeSettingInputs
                            themeSetting={themeSetting}
                            setThemeSetting={setThemeSetting}
                        />

                        {/* setting 3 */}
                    </div>

                    <div className="dialog__footer | box | flex">
                        <Button
                            intent="confirm"
                            size="medium"
                            type="submit"
                            className="to-right min-w-20"
                        >
                            Ok
                        </Button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export { Setting };
