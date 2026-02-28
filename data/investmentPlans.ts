export type InvestmentPlan = {
  id: "bronce" | "plata" | "oro";
  name: string;
  min: number;           // RD$
  cycleMonths: number;   // meses
  estReturnMin: number;  // % estimado por ciclo
  estReturnMax: number;  // % estimado por ciclo
  perks: string[];
};

export const plans: InvestmentPlan[] = [
  {
    id: "bronce",
    name: "Bronce",
    min: 50000,
    cycleMonths: 6,
    estReturnMin: 10,
    estReturnMax: 14,
    perks: [
      "Reporte mensual (resumen)",
      "Galería del ciclo (fotos/avance)",
      "Acceso a cierre de ciclo",
    ],
  },
  {
    id: "plata",
    name: "Plata",
    min: 150000,
    cycleMonths: 6,
    estReturnMin: 12,
    estReturnMax: 16,
    perks: [
      "Reporte mensual (detalle)",
      "Actualizaciones quincenales",
      "Prioridad en cupos futuros",
    ],
  },
  {
    id: "oro",
    name: "Oro",
    min: 300000,
    cycleMonths: 6,
    estReturnMin: 14,
    estReturnMax: 18,
    perks: [
      "Reporte mensual + métricas",
      "Actualizaciones semanales",
      "Reunión de resultados (cierre)",
    ],
  },
];