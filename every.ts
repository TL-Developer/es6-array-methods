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
  private respostasIncorretas: TRespostas[] = [];

  constructor (
    quiz: TQuiz,
  ) {
    this.quiz = quiz;
  }
  
  run(): void {
    this.quiz.respostas.every((resposta: TRespostas) => {
      this.respostasIncorretas.push(resposta);
    });
  }

  output(): TOutput {
    const acertouTodas = this.respostasIncorretas.length !== 0;

    return {
      nome: this.quiz.nome,
      acertouTodas,
    };
  }
};

const dataQuiz: TQuiz = {
  nome: "Tiago Lima",
  respostas: [
    { questaoId: '01', ok: false },
    { questaoId: '02', ok: true },
    { questaoId: '03', ok: false },
    { questaoId: '04', ok: true },
    { questaoId: '05', ok: false },
  ]
};

const startQuiz = new Quiz(dataQuiz);

startQuiz.run();
