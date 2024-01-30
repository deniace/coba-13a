export default function handler(req, res) {
  console.log(req);
  const { slug } = req.query;
  const { tetew } = req.queryn;

  //   res.status(200).send(`asu ${slug}`);
  res.status(200).json({
    data: slug,
    tetew: tetew,
  });
}
