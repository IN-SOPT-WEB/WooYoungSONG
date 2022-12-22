export interface letter {
  id: number;
  writer: string;
  title: string;
  content: string;
  passwordHint: string;
  password: string;
}

export interface letterDataProps {
  letterData: letter;
}
export interface UseInterval {
  (callback: () => void, interval: number): void;
}
