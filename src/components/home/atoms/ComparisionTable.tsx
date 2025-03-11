import {
  Table,
  Paper,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';

interface Metric {
  value: string;
  label: string;
}

interface Product {
  id: string;
  title: string;
  robotType: string;
  metrics: Metric[];
  painPoints: string[];
}

interface ComparisonTableProps {
  products: Product[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ products }) => {
  const maxColumns = Math.max(products.length, 3);
  const emptyColumns = maxColumns - products.length;

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 4,
        backgroundColor: '#2d2d2d',
        color: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
      >
        Product Comparison
      </Typography>

      <Table sx={{ borderCollapse: 'collapse' }}>
        {/* Table Head */}
        <TableHead>
          <TableRow sx={{ backgroundColor: '#222' }}>
            <TableCell
              sx={{
                color: '#5a7d2f',
                fontWeight: 'bold',
                borderBottom: '2px solid #444',
              }}
            >
              Specification
            </TableCell>
            {products.map((product) => (
              <TableCell
                key={product.id}
                sx={{
                  color: '#5a7d2f',
                  fontWeight: 'bold',
                  borderBottom: '2px solid #444',
                  textAlign: 'center',
                }}
              >
                {product.title}
              </TableCell>
            ))}
            {/* Fill empty columns */}
            {Array.from({ length: emptyColumns }).map((_, index) => (
              <TableCell
                key={`empty-${index}`}
                sx={{
                  color: '#5a7d2f',
                  fontWeight: 'bold',
                  borderBottom: '2px solid #444',
                  textAlign: 'center',
                }}
              >
                Product {products.length + index + 1}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {/* Category */}
          <TableRow sx={{ borderBottom: '1px solid #444' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
              Category
            </TableCell>
            {products.map((product) => (
              <TableCell
                key={product.id}
                sx={{ color: 'white', textAlign: 'center' }}
              >
                {product.robotType}
              </TableCell>
            ))}
            {Array.from({ length: emptyColumns }).map((_, index) => (
              <TableCell
                key={`empty-cat-${index}`}
                sx={{ color: 'white', textAlign: 'center' }}
              >
                -
              </TableCell>
            ))}
          </TableRow>

          {/* Metrics (Payload, Reach, Precision, Speed) */}
          {['Payload', 'Reach/Range', 'Precision', 'Speed'].map(
            (metricLabel) => (
              <TableRow
                key={metricLabel}
                sx={{ borderBottom: '1px solid #444' }}
              >
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  {metricLabel}
                </TableCell>
                {products.map((product) => {
                  const metric = product.metrics.find(
                    (m) => m.label === metricLabel,
                  );
                  return (
                    <TableCell
                      key={product.id}
                      sx={{ color: 'white', textAlign: 'center' }}
                    >
                      {metric ? metric.value : '-'}
                    </TableCell>
                  );
                })}
                {Array.from({ length: emptyColumns }).map((_, index) => (
                  <TableCell
                    key={`empty-metric-${index}`}
                    sx={{ color: 'white', textAlign: 'center' }}
                  >
                    -
                  </TableCell>
                ))}
              </TableRow>
            ),
          )}

          <TableRow sx={{ borderBottom: '1px solid #444' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
              Key Features
            </TableCell>
            {products.map((product) => (
              <TableCell
                key={product.id}
                sx={{ color: 'white', textAlign: 'center' }}
              >
                {product.painPoints.length > 0
                  ? product.painPoints.join(', ')
                  : '-'}
              </TableCell>
            ))}
            {Array.from({ length: emptyColumns }).map((_, index) => (
              <TableCell
                key={`empty-features-${index}`}
                sx={{ color: 'white', textAlign: 'center' }}
              >
                -
              </TableCell>
            ))}
          </TableRow>

          {/* <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Best For</TableCell>
            {products.map((product) => (
              <TableCell key={product.id} sx={{ color: 'white', textAlign: 'center' }}>
                {product.bestFor || '-'}
              </TableCell>
            ))}
            {Array.from({ length: emptyColumns }).map((_, index) => (
              <TableCell key={`empty-bestfor-${index}`} sx={{ color: 'white', textAlign: 'center' }}>
                -
              </TableCell>
            ))}
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;
