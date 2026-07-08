//styling
import "./index.css";
//props
type MetricCardProps = {
  title: string;
  value: number | string;
  desciprtion?: string;
};

export default function MetricCard(data: MetricCardProps) {
  return (
    <div className="metric-card">
      <h3 className="metric-card-title">{data.title}</h3>
      <div>
        <p className="metric-card-value">Current: {data.value}</p>
        <p className="metric-card-description"> {data.desciprtion}</p>
      </div>
    </div>
  );
}
