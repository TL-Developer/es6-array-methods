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

export class Quiz implements IQuiz {
  private readonly quiz: TQuiz;
  private acertouTodas: boolean = false;

  constructor (
    quiz: TQuiz,
  ) {
    this.quiz = quiz;
  }
  
  run(): void {
    this.acertouTodas = this.quiz.respostas.some((resposta: TRespostas) => {
      return resposta.ok;
    });
  }

  output(): TOutput {
    return {
      nome: this.quiz.nome,
      acertouTodas: this.acertouTodas,
    };
  }
};
