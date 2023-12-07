import Song from "../Models/song.model.js";
import Artist from '../Models/artist.model.js';
Song.belongsTo(Artist);


export default class SongController {
  //List all songs
  list = async (req, res) => {
    try {
      const result = await Song.findAll({
        include: {
            model: Artist,
            attributes: ['name']
        }
      });
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
        include: {
            model: Artist,
            attributes: ['name']
        }
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
        console.error("Error creating song:", error);
        res.status(500).json({
          message: "Internal server error",
        });
      }
    else {
      console.error("Missing required parameters");
      res.status(400).json({
        message: "Missing required parameters",
      });
    }
  };

  //UPDATE ROW
  update = async (req, res) => {
    const { title, content, artist_id } = req.body;
    const { id } = req.params;

    if (title && content && artist_id) {
      try {
        const result = await Song.update(
          {
            title: title,
            content: content,
            artist_id: artist_id,
          },
          {
            where: { id: id },
          }
        );

        res.json({
          message: "song updated",
          new_title: title,
          new_content: content,
          new_artist_id: artist_id,
        });
      } catch (error) {
        res.send(error);
        console.log(error);
      }
    } else {
      res.status(400).json({
        message: "Missing required parameters",
      });
    }
  };

  //DELETE ROW
  remove = async (req, res) => {
    const { id } = req.params;

    try {
      await Song.destroy({
        where: { id: id },
      });
      res.status(200).send({
        message: "Song Deleted",
      });
    } catch (error) {
      res.send(error);
    }
  };
}
