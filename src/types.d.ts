interface ProjectProperties {
  name: string;
  tech: string;
  time: string;
  description: string;
  repoUrl: string;
  langUrl: string;
  pushedAt: Date;
};

interface WakatimeType {
  name: string;
  total_seconds: number;
  percent: number;
  digital: number;
  decimal: number;
  text: string;
  hours: number;
  minutes: number
};
