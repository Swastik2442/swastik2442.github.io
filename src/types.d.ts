interface WindowSize {
  height: number;
  width: number;
}

interface ProjectProperties {
  name: string;
  tech: string;
  time: string;
  description: string;
  repoUrl: string;
  langUrl: string;
  pushedAt: Date;
};

interface WorkProperties {
  name: string;
  tech: string;
  time: string;
  description: string;
  image?: string;
  url?: string;
}

interface WakatimeType {
  name: string;
  total_seconds: number;
  percent: number;
  digital: number;
  decimal: number;
  text: string;
  hours: number;
  minutes: number;
}

interface QImg {
  url: string;
  blur_hash: string | null;
  name_author: string;
  name_service: string;
  attr_author: string;
  attr_service: string;
}
