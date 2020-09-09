export interface ISettings {
  examSettings: {
    retry: string,
    repeat: string,
  };

  generalSettings: {
    record: boolean,
  };

  visualSettings: {
    theme: string,
    font: string,
    fontSize: string,
  };
}
