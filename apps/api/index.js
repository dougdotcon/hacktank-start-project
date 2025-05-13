import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.json({ message: 'API HackTank - Waitlist' });
});

// Rota para adicionar um e-mail à waitlist
app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validações básicas
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Nome é obrigatório' });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'E-mail é obrigatório' });
    }

    // Validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Formato de e-mail inválido' });
    }

    // Verificar se o e-mail já existe
    const existingEmail = await prisma.waitlist.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(409).json({ error: 'Este e-mail já está cadastrado' });
    }

    // Criar novo registro na waitlist
    const newWaitlistEntry = await prisma.waitlist.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json({
      message: 'Inscrição realizada com sucesso!',
      data: {
        id: newWaitlistEntry.id,
        email: newWaitlistEntry.email,
      },
    });
  } catch (error) {
    console.error('Erro ao processar a inscrição:', error);
    res.status(500).json({ error: 'Erro ao processar a inscrição' });
  }
});

// Rota para verificar a saúde da API
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 