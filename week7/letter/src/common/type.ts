export interface Letter {
  id: number;
  writer: string;
  title: string;
  content: string;
  passwordHint: string;
  password: string;
}

export interface LetterDataProps {
  letterData: Letter;
}
export interface UseInterval {
  (callback: () => void, interval: number): void;
}
