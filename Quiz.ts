export type TRespostas = {
  questaoId: string,
  ok: boolean,
};

export type TQuiz = {
  nome: string,
  respostas: TRespostas[],
};

export type TOutput = {
  nome: string,
  acertouTodas: boolean,
};

export interface IQuiz {
  run(): void
  output(): TOutput;
};

export abstract class Quiz implements IQuiz {
  protected readonly quiz: TQuiz;
  protected acertouTodas: boolean;

  constructor (
    quiz: TQuiz,
    acertouTodas: boolean = false,
  ) {
    this.quiz = quiz;
    this.acertouTodas = acertouTodas;
  }
  
  abstract run(): void;

  output(): TOutput {
    return {
      nome: this.quiz.nome,
      acertouTodas: this.acertouTodas,
    };
  }
};
