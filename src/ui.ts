import ora from 'ora';

const spinner = ora({ color: 'cyan' });

export const startSpinner = (text?: string) => spinner.start(text);
export const stopSpinner = () => spinner.stop();
export const succeedSpinner = (text?: string) => spinner.succeed(text);
export const failSpinner = (text?: string) => spinner.fail(text);
export const updateSpinner = (text: string) => spinner.text = text;
