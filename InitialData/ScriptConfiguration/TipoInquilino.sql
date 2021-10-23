DROP TABLE IF EXISTS #TipoInqulinoTemp

SELECT 
Fisico, Juridico  INTO #TipoInquilinoTemp
FROM (
VALUES
(1, 'Fisico'),
(2, 'Juridico')


)AS TEMP (Fisico, Juridico)


----ACTUALIZAR DATOS---
UPDATE P SET
  P.Fisico= TM.Fisico,
  P.Juridico= TM.Juridico
FROM dbo.TipoInquilino P
INNER JOIN #TipoInquilinoTemp TM
    ON P.Id_TipoInquilino= TM.Id_TipoInquilino


----INSERTAR DATOS---

SET IDENTITY_INSERT dbo.TipoInquilino ON

INSERT INTO dbo.TipoInquilino(
Fisico,Juridico)
SELECT
Fisico,Juridico
FROM #TipoInquilinoTemp