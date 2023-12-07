import Artist from "../Models/artist.model.js";
import Song from "../Models/song.model.js";
Artist.hasMany(Song, {
    foreignKey: 'artist_id',
    as: 'songs', // alias for the association
  });

export default class ArtistController {
  //List all artists
  list = async (req, res) => {
    try {
      const result = await Artist.findAll();
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  }; // List end

  //GET artist details
  details = async (req, res) => {
    const { id } = req.params; //GET id from URL parameters

    try {
      const result = await Artist.findOne({
        where: { id: id },
        include: {
            model: Song,
            attributes: ['title'],
            as: "songs"
        }
        
      });
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  }; //Details end

  //CREATE ROW
  create = async (req, res) => {
    const { name, description } = req.body;

    if (name, description)
      //check if conditions exist in form
      try {
        const result = await Artist.create(req.body);
        res.json({
          message: "artist created",
          new_id: result.id,
        });
      } catch (error) {
        res.send(error);
        console.log(error);
      }
  };

  //UPDATE ROW
  update = async (req, res) => {
    const { name, description } = req.body;

    if(name, description)

        try {
            const result = await Artist.update(req.body)
            res.json({
                message: "Artist updated"
            })
        } catch (error) {
            res.send(error);
            console.log(error);
        };
  };

  //DELETE ROW
  remove = async (req, res) => {
    const { id } = req.params

    try{
        await Artist.destroy({
            where: { id: id }
        });
        res.status(200).send({
            message: "Artist Deleted"
        });
    } catch (error) {
        res.send(error);
    };
  };




}; //Controller end
