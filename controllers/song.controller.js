import Song from "../Models/song.model.js";

export default class SongController {
  //List all songs
  list = async (req, res) => {
    try {
      const result = await Song.findAll();
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  }; // List end

  //GET song details
  details = async (req, res) => {
    const { id } = req.params; //GET id from URL parameters

    try {
      const result = await Song.findOne({
        where: { id: id },
      });
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  }; //Details end

  //CREATE ROW
  create = async (req, res) => {
    const { title, content, artist_id } = req.body;

    if (title && content && artist_id)
      //check if conditions exist in form
      try {
        const result = await Song.create(req.body);
        res.json({
          message: "song created",
          new_id: result.id,
        });
      } catch (error) {
        res.send(error);
        console.log(error);
      }
  };

  //UPDATE ROW
  update = async (req, res) => {
    const { title, content, artist_id} = req.body;

    if(title && content && artist_id)

        try {
            const result = await Song.update(req.body)
            res.json({
                message: "song updated"
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
        await Song.destroy({
            where: { id: id }
        });
        res.status(200).send({
            message: "Song Deleted"
        });
    } catch (error) {
        res.send(error);
    };
  };




}; //Controller end
