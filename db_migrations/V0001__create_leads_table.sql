CREATE TABLE t_p45847012_digital_innovation_h.leads (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);