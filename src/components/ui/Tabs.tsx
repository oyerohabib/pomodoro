import { useState } from 'react';

import { Button } from '.';

interface TabItemProps {
    label: string;
    name: string;
    value: string | number;
    ariaLabel?: string;
    handleClick: () => void;
}

interface TabsProps {
    items: TabItemProps[];
    defaultValue?: string;
    tabListClassName?: string;
    tabItemClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
    items,
    defaultValue,
    tabListClassName,
    tabItemClassName,
}) => {
    const [activeTab, setActiveTab] = useState(defaultValue ?? items[0].name);

    return (
        <div className="tabs">
            <div className={`tabs-list ${tabListClassName}`}>
                {items.map(({ name, label, ariaLabel, value, handleClick }) => (
                    <Button
                        key={name}
                        intent="secondary"
                        size="small"
                        type="button"
                        className={`${tabItemClassName} ${name === activeTab ? 'active' : ''}`}
                        aria-label={ariaLabel}
                        value={value}
                        onClick={() => {
                            handleClick();
                            setActiveTab(name);
                        }}
                    >
                        {label}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export { Tabs };
