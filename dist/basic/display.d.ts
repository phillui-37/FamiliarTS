export declare type Display = {
    isDisplay: boolean;
    display(): string;
};
export declare namespace Display {
    const isDisplay: (obj: any) => obj is Display;
    const display: (obj: any) => string;
}
