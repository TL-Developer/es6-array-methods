import chai from 'chai';

const expect = chai.expect;

import { Some } from '../Some';
import { TQuiz } from '../Quiz';

const makeSome = (dataQuiz: TQuiz) => {
  const some = new Some(dataQuiz);

  some.run();

  return {
    output: some.output(),
  };
};

describe('Method from array => Some', () => {
  it('Deve retornar true porque acertou a primeira', () => {
    const dataQuiz: TQuiz = {
      nome: "Tiago Lima",
      respostas: [
        { questaoId: '01', ok: true },
        { questaoId: '02', ok: false },
        { questaoId: '03', ok: false },
      ]
    };

    const acertouTodas = makeSome(dataQuiz).output.acertouTodas;

    expect(acertouTodas).to.be.true;
  });

  it('Deve retornar true porque acertou a ultima', () => {
    const dataQuiz: TQuiz = {
      nome: "Tiago Lima",
      respostas: [
        { questaoId: '01', ok: false },
        { questaoId: '02', ok: false },
        { questaoId: '03', ok: true },
      ]
    };

    const acertouTodas = makeSome(dataQuiz).output.acertouTodas;

    expect(acertouTodas).to.be.true;
  });

  it('Deve retornar true porque acertou a primeira e a ultima', () => {
    const dataQuiz: TQuiz = {
      nome: "Tiago Lima",
      respostas: [
        { questaoId: '01', ok: true },
        { questaoId: '02', ok: false },
        { questaoId: '03', ok: true },
      ]
    };

    const acertouTodas = makeSome(dataQuiz).output.acertouTodas;

    expect(acertouTodas).to.be.true;
  });

  it('Deve retornar true porque acertou todas', () => {
    const dataQuiz: TQuiz = {
      nome: "Tiago Lima",
      respostas: [
        { questaoId: '01', ok: true },
        { questaoId: '02', ok: true },
        { questaoId: '03', ok: true },
      ]
    };

    const acertouTodas = makeSome(dataQuiz).output.acertouTodas;

    expect(acertouTodas).to.be.true;
  });

  it('Deve retornar false porque errou todas', () => {
    const dataQuiz: TQuiz = {
      nome: "Tiago Lima",
      respostas: [
        { questaoId: '01', ok: false },
        { questaoId: '02', ok: false },
        { questaoId: '03', ok: false },
      ]
    };

    const acertouTodas = makeSome(dataQuiz).output.acertouTodas;

    expect(acertouTodas).to.be.false;
  });
});
